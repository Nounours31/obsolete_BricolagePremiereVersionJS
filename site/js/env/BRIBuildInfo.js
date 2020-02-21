'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-21 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1029';
    this._commitGIT = '44a15878d2bc4b42dd84d2cf8bd9a4f067f26622';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}