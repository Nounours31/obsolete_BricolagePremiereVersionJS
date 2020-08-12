'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-12 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1720';
    this._commitGIT = 'e2c9fc5cc863d67e3fa37a68e2622c88d2696dbf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}