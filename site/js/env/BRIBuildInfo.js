'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:23:07';
    this._versionBuild = 'jenkins-Bricolage-118';
    this._commitGIT = '1c3e97abfbe89b7e320dc2da65ca1da64ac20688';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}