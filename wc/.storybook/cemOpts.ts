import { setCustomElementsManifest } from '@storybook/web-components';

export const setCustomElementsManifestWithOptions = (
    customElements: any,
    options: { privateFields?: boolean; mapMembersToAttributes?: boolean },
): void => {
    let { privateFields = true, mapMembersToAttributes } = options;
    if (!privateFields) {
        actOnDeclarations(customElements, declaration => {
            Object.keys(declaration).forEach(key => {
                if (Array.isArray(declaration[key])) {
                    declaration[key] = declaration[key].filter(
                        (member: { privacy: string | string[] }) =>
                            !member.privacy?.includes('private'),
                    );
                }
            });
        });
    }
    if (!mapMembersToAttributes) {
        actOnDeclarations(customElements, declaration => {
            const attrs = declaration.attributes || [];
            const members = declaration.members;
            // Members includes all attributes, properties, and internal fields,
            // whether private or not. Attributes are the members marked with
            // `@Prop()`. However, attributes in the CEM are missing data we want
            // for our generated documentation.
            //
            // Here, we copy data from `members` onto `attributes` in order to
            // complete the data, then delete `members` so they do not appear
            // as controls in Storybook.
            //
            // Finally, we switch `attributes` to `properties` for typed conrols.
            // I am not sure why, but `attributes` have nontyped controls, which
            // is not the best developer experience.
            attrs.forEach((attr: { name: any; description: any }) => {
                const member = members.find(
                    (member: { name: any; description: any }) =>
                        member.name === attr.name,
                );
                Object.keys(member).forEach(key => {
                    attr[key] = attr[key] ?? member[key];
                });
            });
            delete declaration.members;
            declaration.properties = attrs;
        });
    }
    return setCustomElementsManifest(customElements);
};

const actOnDeclarations = (
    customElements: any,
    declarationsFunction: (declaration: any) => void,
) => {
    customElements?.modules?.forEach((module: { declarations: any[] }) => {
        module?.declarations?.forEach(declarationsFunction);
    });
};
