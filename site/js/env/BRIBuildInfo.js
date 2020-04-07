'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-07 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1214';
    this._commitGIT = '48931076a628c8f9ccfbeeab5fe927fbb868fc27';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}