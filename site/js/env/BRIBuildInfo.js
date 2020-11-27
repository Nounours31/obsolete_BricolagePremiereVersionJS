'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-27 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2150';
    this._commitGIT = '4d88be8fef387446384ae58a4b1b5746b989eb23';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}