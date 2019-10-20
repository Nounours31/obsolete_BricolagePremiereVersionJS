'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-20 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-531';
    this._commitGIT = '3edc024b4563f285b51b873cf17e086e0f067458';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}