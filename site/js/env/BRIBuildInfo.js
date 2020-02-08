'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-08 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-977';
    this._commitGIT = '5783a49be38fde55cda2a97e116a892cc146172f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}