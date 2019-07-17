'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-17 20:00:12';
    this._versionBuild = 'jenkins-Bricolage-154';
    this._commitGIT = '7ce6bf0ff8afb1bb717be6cef942e48462ba7f42';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}