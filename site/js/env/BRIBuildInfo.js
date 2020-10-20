'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-20 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1996';
    this._commitGIT = 'ebdbaf76e0f9f380e5ce8b35940a95a7791e10d6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}