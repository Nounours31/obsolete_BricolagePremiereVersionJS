'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-18 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1016';
    this._commitGIT = '3e78a7cdbac727c15b4e2bd061f07c896140e085';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}