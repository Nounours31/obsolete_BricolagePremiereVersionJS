'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-02 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-339';
    this._commitGIT = '00d47e35a240f1fe71b99239b14034dda34ce7d5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}