'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-13 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2093';
    this._commitGIT = '0722b91ac74a2007c7127f72d7935e1b284a52ed';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}