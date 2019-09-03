'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-03 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-344';
    this._commitGIT = '39bac8e241b49df18383828ea0440a2d8b3a47b1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}