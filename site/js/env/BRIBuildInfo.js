'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-13 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-136';
    this._commitGIT = 'e851350ed080a9e7f9d834970ef571b645634b7d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}