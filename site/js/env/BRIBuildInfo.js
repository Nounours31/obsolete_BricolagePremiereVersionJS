'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-20 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1263';
    this._commitGIT = 'd66d02389c5a147aa5b32c7e47b7399d675b698f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}