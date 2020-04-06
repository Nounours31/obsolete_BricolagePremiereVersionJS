'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-06 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1210';
    this._commitGIT = '947b69f980be3e55c0cc5518a9f5d3737821c95a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}