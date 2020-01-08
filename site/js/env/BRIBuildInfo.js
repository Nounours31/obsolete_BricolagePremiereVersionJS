'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-08 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-852';
    this._commitGIT = '0497d7c4dcdf168ac3c4b1f5a8ec2840eee682b1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}