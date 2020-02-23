'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-23 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1036';
    this._commitGIT = '872ecf3d948541a7cb46f2622e5211e7f33b080f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}