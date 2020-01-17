'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-17 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-888';
    this._commitGIT = 'db5607191ec4a1885ad0385020a3cca784641118';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}