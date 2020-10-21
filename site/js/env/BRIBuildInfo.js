'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-21 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2000';
    this._commitGIT = '893a59ff3057aae1fc365125b06080c036f53aa0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}