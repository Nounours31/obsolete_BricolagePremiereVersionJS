'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-03 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1072';
    this._commitGIT = 'e01c8b18df5dbb15b3996870bc4102601409ba42';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}