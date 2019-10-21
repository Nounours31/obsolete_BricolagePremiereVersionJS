'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-21 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-535';
    this._commitGIT = '3be53da1664d119096f5e1a69ec30f8cd19ca209';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}