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
            const attrs = declaration.attributes;
            const members = declaration.members;
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
