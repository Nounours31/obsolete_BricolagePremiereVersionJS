'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-08 16:00:14';
    this._versionBuild = 'jenkins-Bricolage-241';
    this._commitGIT = '0a248a6dc3e8fc08773ec490e7c3eb701fcdc535';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}