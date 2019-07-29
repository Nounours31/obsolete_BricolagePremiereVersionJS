'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-29 20:00:14';
    this._versionBuild = 'jenkins-Bricolage-202';
    this._commitGIT = 'bd13d57853d1085a11bad99af4922ad06f1a2ff1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}