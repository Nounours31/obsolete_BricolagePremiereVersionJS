'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-18 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-893';
    this._commitGIT = '68fcf28e80b7124d13e1e86d48ee5dfb1b1877fa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}