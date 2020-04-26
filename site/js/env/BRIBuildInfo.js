'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-26 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-1289';
    this._commitGIT = '522c0aedeb7d44aa2960cfead4dd777a8608fbf1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}