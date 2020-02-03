'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-03 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-955';
    this._commitGIT = 'aac5e39516b7a5cb51c03a3fb2eb349c5f188b8d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}