'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-27 08:00:12';
    this._versionBuild = 'jenkins-Bricolage-191';
    this._commitGIT = 'db9d25d0e72744f97bc0a80757881f7f370f00a2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}