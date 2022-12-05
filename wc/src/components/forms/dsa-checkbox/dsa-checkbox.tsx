import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';

import { JSXBase } from '@stencil/core/internal';

/**
 * Checkbox control. Light children will be used for the label.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox | MDN docs}
 * @see {@link JSXBase.InputHTMLAttributes `<input>` attributes}
 * @see {@link HTMLInputElement HTMLInputElement interface}
 */
@Component({
  tag: 'dsa-checkbox',
  styleUrl: 'dsa-checkbox.css',
  shadow: true,
})
export class DsaCheckbox {
  constructor() {
    this.checked = this.defaultChecked;
  }

  /**
   * Whether the command or control is checked.
   * Note: this behaves the way it does in React, not the way it does in HTML.
   */
  @Prop({ mutable: true }) checked: boolean;

  /**
   * Whether the checkbox is checked by default.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#checked MDN docs}
   */
  @Prop({ reflect: true }) defaultChecked: boolean;

  /**
   * Whether the form control is disabled
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled MDN docs}
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Name of the form control. Submitted with the form as part of a name/value pair
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name MDN docs}
   */
  @Prop({ reflect: true }) name: string;

  /**
   * The value that will be submitted when the checkbox is checked
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value MDN docs}
   */
  @Prop({ reflect: true }) value: string;

  /** Host element. */
  @Element() el: HTMLElement;

  @Event() _change: EventEmitter<unknown>;

  @Watch('checked')
  protected watchHandler() {
    this._input.checked = this.checked;
    this._change.emit();
  }

  connectedCallback() {
    // connect to FormData
    this._form = this._findContainingForm();
    if (this._form) {
      this._form.addEventListener('formdata', this._handleFormData);
    }
  }

  disconnectedCallback() {
    // disconnect from FormData
    if (this._form) {
      this._form.removeEventListener('formdata', this._handleFormData);
      this._form = null;
    }
  }

  /** Owner form. */
  private _form?: HTMLFormElement;

  /** Wrapped <input> element. */
  private _input: HTMLInputElement;

  /** Handle onChange event on <input> */
  private _onChangeInput = (): void => {
    this.checked = this._input.checked;
  };

  /** Participate in FormData. */
  private _handleFormData = (e: FormDataEvent): void => {
    if (!this.disabled && this.checked) {
      e.formData.append(this.name, this.value ?? 'on');
    }
  };

  /** Find the form owning this control. */
  private _findContainingForm(): HTMLFormElement | undefined {
    // can only be in a form in the same "scope", ShadowRoot or Document
    const root = this.el.getRootNode() as ShadowRoot | Document;

    const forms = Array.from(root.querySelectorAll('form'));
    // we can only be in one <form>, so the first one to contain us is the correct one
    return forms.find(form => form.contains(this.el));
  }

  render() {
    const mirroredAttributeNames: (keyof JSXBase.InputHTMLAttributes<HTMLInputElement>)[] =
      ['disabled', 'value'];
    const mirroredAttrs = Object.fromEntries(
      mirroredAttributeNames.map(a => [a, this[a]]),
    );

    return (
      <Host>
        <label>
          <input
            checked={this.defaultChecked}
            onChange={this._onChangeInput}
            ref={ref => (this._input = ref)}
            type="checkbox"
            {...mirroredAttrs}
          />{' '}
          <slot />
        </label>
      </Host>
    );
  }
}
