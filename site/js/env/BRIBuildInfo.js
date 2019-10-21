'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-21 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-537';
    this._commitGIT = '067436028b23076aea56855e042e1c076f47e0c2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}