class SideMenuCtrl {
  constructor($state) {
    'ngInject';
    this._state = $state;
    this.stateName = this._state.current.name;
  }

  openState(state) {
    console.log(state);
    this.stateName = state;
    this._state.go(this.stateName);
  }
}

export default SideMenuCtrl;