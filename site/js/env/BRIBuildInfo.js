'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-19 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1019';
    this._commitGIT = 'b3925ae5437cd34a9a54d06736b06208c4eae0cd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}