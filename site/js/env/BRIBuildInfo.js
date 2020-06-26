'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-26 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1533';
    this._commitGIT = '8dade8c3e7acb65c860c8ce24d12e928a34920ef';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}