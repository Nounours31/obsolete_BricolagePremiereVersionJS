'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-05 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-598';
    this._commitGIT = '11828ac7cf181984ef15f6da1643760a82877f64';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}