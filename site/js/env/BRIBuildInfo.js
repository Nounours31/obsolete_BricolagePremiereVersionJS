'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-08 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1827';
    this._commitGIT = 'b6dcc615ac87536c17682bf48b46f1e20a41c82b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}