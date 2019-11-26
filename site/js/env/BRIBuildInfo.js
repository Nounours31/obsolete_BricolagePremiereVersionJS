'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-26 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-681';
    this._commitGIT = 'ec2c16dc2c4480898d9bda255c8f1b4f62d4e1ea';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}