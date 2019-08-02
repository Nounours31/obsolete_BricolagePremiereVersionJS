'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-02 12:00:16';
    this._versionBuild = 'jenkins-Bricolage-216';
    this._commitGIT = 'b9a4a23c2001021656463c16c3b72549ce46a1c1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}