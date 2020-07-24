'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-24 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1644';
    this._commitGIT = '3a92cbfd80365005e357c9ad957422f8f106fc38';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}