'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-22 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1762';
    this._commitGIT = '3065f8f9eda81c9b3339af37a78e01a2052e1791';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}