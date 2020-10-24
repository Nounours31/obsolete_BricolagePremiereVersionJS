'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-24 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-2013';
    this._commitGIT = 'cb9a65acfd24721d4118075d4c9e553ddce13962';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}