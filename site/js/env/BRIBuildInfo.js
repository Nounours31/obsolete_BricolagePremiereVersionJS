'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-15 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-758';
    this._commitGIT = '836dccc7f9fab2272e0999eaf35a32f3969f7239';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}