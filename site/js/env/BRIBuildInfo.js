'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-25 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1405';
    this._commitGIT = '00248287f2b4bdddccd7379442cf1d86c4bb0a5a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}