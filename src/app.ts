class NovaTable {

  constructor(options) {
    this._namespace = 'nova-table';
    this.options = Object.assign(this.defaults, options);
  }

  /**
   * The default options for this class
   * @returns {object}
   */
  get defaults () {
    return {
      target: `.${this._namespace}`,
      wrapperClass: this._namespace,
      deleteButtonClass: `${this._namespace}__delete`,
      deleteButtonIcon: 'x',
      onReorder: function () {},
      onClone: function () {},
      onAdd: function () {},
      onDelete: function () {},
    }
  }
}

export default NovaTable
