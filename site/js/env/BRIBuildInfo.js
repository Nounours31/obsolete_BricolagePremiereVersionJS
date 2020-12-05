'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-05 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-2182';
    this._commitGIT = '4eaff382088e9cab54f3c27268245472a77d050f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}