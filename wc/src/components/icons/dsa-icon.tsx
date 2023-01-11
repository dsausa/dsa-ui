import { Component, getAssetPath, h, Prop } from '@stencil/core';
/*
 * TODO: This was an approach to have a single dsa-icon component with a linked svg file.
 * However SVG <object> embeds cannot have their fill or other properties manipulated,
 * so this will always be black. See blame for this PR where I'll add some references
 */

// type IconType =
//   | 'calendar'
//   | 'envelope'
//   | 'identification'
//   | 'information-circle'
//   | 'map-pin';

@Component({
  tag: 'dsa-icon',
  styleUrl: 'icon-styles.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class Icon {
  /**
   * Icon color (currentColor by default)
   */
  @Prop() color = 'currentColor';

  @Prop() kind: string; // IconType;

  render() {
    return (
      <object
        type="image/svg+xml"
        data={getAssetPath(`./assets/svg/${this.kind}.svg`)}
      />
    );
  }
}
