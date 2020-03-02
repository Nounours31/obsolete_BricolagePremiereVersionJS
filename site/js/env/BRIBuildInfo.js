'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-02 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1067';
    this._commitGIT = '47357ca4180a3daafbc5fb0a016f2d5ebd699173';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}