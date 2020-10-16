'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-16 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1981';
    this._commitGIT = '543eb12ea69dc0bd79681fe84554b44832d00d53';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}