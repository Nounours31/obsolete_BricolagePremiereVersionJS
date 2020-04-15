'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-15 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1245';
    this._commitGIT = 'd1705cd2cfb130c6104cf05adff23a9d83dc100b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}