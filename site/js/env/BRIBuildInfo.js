'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-24 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1399';
    this._commitGIT = '1925e561af7dafaa28323f571606edee4c674893';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}