'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-27 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1051';
    this._commitGIT = 'ceea517c1d339f6e7d501b2720b5a80f20d13dc9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}