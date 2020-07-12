'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-12 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1598';
    this._commitGIT = '8abf035f4a79cbc603f10b0dd0f314c86867f609';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}