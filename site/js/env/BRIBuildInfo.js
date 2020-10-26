'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-26 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-2019';
    this._commitGIT = '2977bae893a8817363460e71fc6c424f83ca927a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}