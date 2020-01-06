'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-06 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-845';
    this._commitGIT = '4f0c0999bc2d3e7e0b108e6eaa51e3a896f1a132';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}